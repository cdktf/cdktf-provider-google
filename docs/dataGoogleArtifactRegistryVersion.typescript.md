# `dataGoogleArtifactRegistryVersion` Submodule <a name="`dataGoogleArtifactRegistryVersion` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryVersion <a name="DataGoogleArtifactRegistryVersion" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version google_artifact_registry_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

new dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion(scope: Construct, id: string, config: DataGoogleArtifactRegistryVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig">DataGoogleArtifactRegistryVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig">DataGoogleArtifactRegistryVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetView` <a name="resetView" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.relatedTags">relatedTags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList">DataGoogleArtifactRegistryVersionRelatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `relatedTags`<sup>Required</sup> <a name="relatedTags" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.relatedTags"></a>

```typescript
public readonly relatedTags: DataGoogleArtifactRegistryVersionRelatedTagsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList">DataGoogleArtifactRegistryVersionRelatedTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryVersionConfig <a name="DataGoogleArtifactRegistryVersionConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

const dataGoogleArtifactRegistryVersionConfig: dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.packageName">packageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}.

---

### DataGoogleArtifactRegistryVersionRelatedTags <a name="DataGoogleArtifactRegistryVersionRelatedTags" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

const dataGoogleArtifactRegistryVersionRelatedTags: dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryVersionRelatedTagsList <a name="DataGoogleArtifactRegistryVersionRelatedTagsList" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

new dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get"></a>

```typescript
public get(index: number): DataGoogleArtifactRegistryVersionRelatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleArtifactRegistryVersionRelatedTagsOutputReference <a name="DataGoogleArtifactRegistryVersionRelatedTagsOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersion } from '@cdktf/provider-google'

new dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags">DataGoogleArtifactRegistryVersionRelatedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleArtifactRegistryVersionRelatedTags;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags">DataGoogleArtifactRegistryVersionRelatedTags</a>

---



