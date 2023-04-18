# `google_notebooks_environment`

Refer to the Terraform Registory for docs: [`google_notebooks_environment`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment).

# `notebooksEnvironment` Submodule <a name="`notebooksEnvironment` Submodule" id="@cdktf/provider-google.notebooksEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksEnvironment <a name="NotebooksEnvironment" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment google_notebooks_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

new notebooksEnvironment.NotebooksEnvironment(scope: Construct, id: string, config: NotebooksEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig">NotebooksEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig">NotebooksEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage"></a>

```typescript
public putContainerImage(value: NotebooksEnvironmentContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: NotebooksEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage"></a>

```typescript
public putVmImage(value: NotebooksEnvironmentVmImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetPostStartupScript"></a>

```typescript
public resetPostStartupScript(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetVmImage"></a>

```typescript
public resetVmImage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

notebooksEnvironment.NotebooksEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

notebooksEnvironment.NotebooksEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

notebooksEnvironment.NotebooksEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference">NotebooksEnvironmentContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference">NotebooksEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference">NotebooksEnvironmentVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImage"></a>

```typescript
public readonly containerImage: NotebooksEnvironmentContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference">NotebooksEnvironmentContainerImageOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: NotebooksEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference">NotebooksEnvironmentTimeoutsOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImage"></a>

```typescript
public readonly vmImage: NotebooksEnvironmentVmImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference">NotebooksEnvironmentVmImageOutputReference</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: NotebooksEnvironmentContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScriptInput"></a>

```typescript
public readonly postStartupScriptInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NotebooksEnvironmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a> | cdktf.IResolvable

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImageInput"></a>

```typescript
public readonly vmImageInput: NotebooksEnvironmentVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksEnvironmentConfig <a name="NotebooksEnvironmentConfig" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

const notebooksEnvironmentConfig: notebooksEnvironment.NotebooksEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.location">location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.name">name</a></code> | <code>string</code> | The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.description">description</a></code> | <code>string</code> | A brief description of this environment. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of this environment for the UI. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#id NotebooksEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#project NotebooksEnvironment#project}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#location NotebooksEnvironment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#name NotebooksEnvironment#name}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.containerImage"></a>

```typescript
public readonly containerImage: NotebooksEnvironmentContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#container_image NotebooksEnvironment#container_image}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#description NotebooksEnvironment#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of this environment for the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#display_name NotebooksEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#id NotebooksEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#post_startup_script NotebooksEnvironment#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#project NotebooksEnvironment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NotebooksEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#timeouts NotebooksEnvironment#timeouts}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.vmImage"></a>

```typescript
public readonly vmImage: NotebooksEnvironmentVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#vm_image NotebooksEnvironment#vm_image}

---

### NotebooksEnvironmentContainerImage <a name="NotebooksEnvironmentContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

const notebooksEnvironmentContainerImage: notebooksEnvironment.NotebooksEnvironmentContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.repository">repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.tag">tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#repository NotebooksEnvironment#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#tag NotebooksEnvironment#tag}

---

### NotebooksEnvironmentTimeouts <a name="NotebooksEnvironmentTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

const notebooksEnvironmentTimeouts: notebooksEnvironment.NotebooksEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#create NotebooksEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#delete NotebooksEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#update NotebooksEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#create NotebooksEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#delete NotebooksEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#update NotebooksEnvironment#update}.

---

### NotebooksEnvironmentVmImage <a name="NotebooksEnvironmentVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

const notebooksEnvironmentVmImage: notebooksEnvironment.NotebooksEnvironmentVmImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.project">project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageFamily">imageFamily</a></code> | <code>string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageName">imageName</a></code> | <code>string</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#project NotebooksEnvironment#project}

---

##### `imageFamily`<sup>Optional</sup> <a name="imageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageFamily"></a>

```typescript
public readonly imageFamily: string;
```

- *Type:* string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#image_family NotebooksEnvironment#image_family}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/notebooks_environment#image_name NotebooksEnvironment#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksEnvironmentContainerImageOutputReference <a name="NotebooksEnvironmentContainerImageOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

new notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksEnvironmentContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---


### NotebooksEnvironmentTimeoutsOutputReference <a name="NotebooksEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

new notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksEnvironmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a> | cdktf.IResolvable

---


### NotebooksEnvironmentVmImageOutputReference <a name="NotebooksEnvironmentVmImageOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer"></a>

```typescript
import { notebooksEnvironment } from '@cdktf/provider-google'

new notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageFamily">resetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageName">resetImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageFamily` <a name="resetImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageFamily"></a>

```typescript
public resetImageFamily(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput">imageFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamily">imageFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageFamilyInput`<sup>Optional</sup> <a name="imageFamilyInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput"></a>

```typescript
public readonly imageFamilyInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `imageFamily`<sup>Required</sup> <a name="imageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamily"></a>

```typescript
public readonly imageFamily: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksEnvironmentVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---



