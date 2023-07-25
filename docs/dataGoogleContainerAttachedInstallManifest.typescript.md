# `data_google_container_attached_install_manifest`

Refer to the Terraform Registory for docs: [`data_google_container_attached_install_manifest`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest).

# `dataGoogleContainerAttachedInstallManifest` Submodule <a name="`dataGoogleContainerAttachedInstallManifest` Submodule" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerAttachedInstallManifest <a name="DataGoogleContainerAttachedInstallManifest" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest google_container_attached_install_manifest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer"></a>

```typescript
import { dataGoogleContainerAttachedInstallManifest } from '@cdktf/provider-google'

new dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest(scope: Construct, id: string, config: DataGoogleContainerAttachedInstallManifestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig">DataGoogleContainerAttachedInstallManifestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig">DataGoogleContainerAttachedInstallManifestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct"></a>

```typescript
import { dataGoogleContainerAttachedInstallManifest } from '@cdktf/provider-google'

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement"></a>

```typescript
import { dataGoogleContainerAttachedInstallManifest } from '@cdktf/provider-google'

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource"></a>

```typescript
import { dataGoogleContainerAttachedInstallManifest } from '@cdktf/provider-google'

dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.manifest">manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerAttachedInstallManifestConfig <a name="DataGoogleContainerAttachedInstallManifestConfig" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.Initializer"></a>

```typescript
import { dataGoogleContainerAttachedInstallManifest } from '@cdktf/provider-google'

const dataGoogleContainerAttachedInstallManifestConfig: dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}.

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



