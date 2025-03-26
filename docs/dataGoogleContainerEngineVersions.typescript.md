# `dataGoogleContainerEngineVersions` Submodule <a name="`dataGoogleContainerEngineVersions` Submodule" id="@cdktf/provider-google.dataGoogleContainerEngineVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerEngineVersions <a name="DataGoogleContainerEngineVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions google_container_engine_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer"></a>

```typescript
import { dataGoogleContainerEngineVersions } from '@cdktf/provider-google'

new dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions(scope: Construct, id: string, config?: DataGoogleContainerEngineVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig">DataGoogleContainerEngineVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig">DataGoogleContainerEngineVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix">resetVersionPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetVersionPrefix` <a name="resetVersionPrefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix"></a>

```typescript
public resetVersionPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleContainerEngineVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct"></a>

```typescript
import { dataGoogleContainerEngineVersions } from '@cdktf/provider-google'

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement"></a>

```typescript
import { dataGoogleContainerEngineVersions } from '@cdktf/provider-google'

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource"></a>

```typescript
import { dataGoogleContainerEngineVersions } from '@cdktf/provider-google'

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport"></a>

```typescript
import { dataGoogleContainerEngineVersions } from '@cdktf/provider-google'

dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleContainerEngineVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleContainerEngineVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleContainerEngineVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleContainerEngineVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion">defaultClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion">latestMasterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion">latestNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion">releaseChannelDefaultVersion</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion">releaseChannelLatestVersion</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions">validMasterVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions">validNodeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput">versionPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix">versionPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultClusterVersion`<sup>Required</sup> <a name="defaultClusterVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion"></a>

```typescript
public readonly defaultClusterVersion: string;
```

- *Type:* string

---

##### `latestMasterVersion`<sup>Required</sup> <a name="latestMasterVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion"></a>

```typescript
public readonly latestMasterVersion: string;
```

- *Type:* string

---

##### `latestNodeVersion`<sup>Required</sup> <a name="latestNodeVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion"></a>

```typescript
public readonly latestNodeVersion: string;
```

- *Type:* string

---

##### `releaseChannelDefaultVersion`<sup>Required</sup> <a name="releaseChannelDefaultVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion"></a>

```typescript
public readonly releaseChannelDefaultVersion: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `releaseChannelLatestVersion`<sup>Required</sup> <a name="releaseChannelLatestVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion"></a>

```typescript
public readonly releaseChannelLatestVersion: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `validMasterVersions`<sup>Required</sup> <a name="validMasterVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions"></a>

```typescript
public readonly validMasterVersions: string[];
```

- *Type:* string[]

---

##### `validNodeVersions`<sup>Required</sup> <a name="validNodeVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions"></a>

```typescript
public readonly validNodeVersions: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `versionPrefixInput`<sup>Optional</sup> <a name="versionPrefixInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput"></a>

```typescript
public readonly versionPrefixInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `versionPrefix`<sup>Required</sup> <a name="versionPrefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix"></a>

```typescript
public readonly versionPrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerEngineVersionsConfig <a name="DataGoogleContainerEngineVersionsConfig" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.Initializer"></a>

```typescript
import { dataGoogleContainerEngineVersions } from '@cdktf/provider-google'

const dataGoogleContainerEngineVersionsConfig: dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix">versionPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}.

---

##### `versionPrefix`<sup>Optional</sup> <a name="versionPrefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix"></a>

```typescript
public readonly versionPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}.

---



