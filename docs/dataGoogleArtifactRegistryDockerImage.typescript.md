# `dataGoogleArtifactRegistryDockerImage` Submodule <a name="`dataGoogleArtifactRegistryDockerImage` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImage <a name="DataGoogleArtifactRegistryDockerImage" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image google_artifact_registry_docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryDockerImage } from '@cdktf/provider-google'

new dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage(scope: Construct, id: string, config: DataGoogleArtifactRegistryDockerImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig">DataGoogleArtifactRegistryDockerImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig">DataGoogleArtifactRegistryDockerImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryDockerImage } from '@cdktf/provider-google'

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryDockerImage } from '@cdktf/provider-google'

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryDockerImage } from '@cdktf/provider-google'

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryDockerImage } from '@cdktf/provider-google'

dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryDockerImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime">buildTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes">imageSizeBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType">mediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime">uploadTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `buildTime`<sup>Required</sup> <a name="buildTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime"></a>

```typescript
public readonly buildTime: string;
```

- *Type:* string

---

##### `imageSizeBytes`<sup>Required</sup> <a name="imageSizeBytes" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes"></a>

```typescript
public readonly imageSizeBytes: string;
```

- *Type:* string

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType"></a>

```typescript
public readonly mediaType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `uploadTime`<sup>Required</sup> <a name="uploadTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime"></a>

```typescript
public readonly uploadTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImageConfig <a name="DataGoogleArtifactRegistryDockerImageConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryDockerImage } from '@cdktf/provider-google'

const dataGoogleArtifactRegistryDockerImageConfig: dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName">imageName</a></code> | <code>string</code> | The image name to fetch. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location">location</a></code> | <code>string</code> | The region of the artifact registry repository. For example, "us-west1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | The last part of the repository name to fetch from. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project">project</a></code> | <code>string</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The image name to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The region of the artifact registry repository. For example, "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The last part of the repository name to fetch from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}

---



