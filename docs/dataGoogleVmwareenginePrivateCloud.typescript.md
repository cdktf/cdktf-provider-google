# `dataGoogleVmwareenginePrivateCloud` Submodule <a name="`dataGoogleVmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareenginePrivateCloud <a name="DataGoogleVmwareenginePrivateCloud" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud(scope: Construct, id: string, config: DataGoogleVmwareenginePrivateCloudConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig">DataGoogleVmwareenginePrivateCloudConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig">DataGoogleVmwareenginePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareenginePrivateCloud to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareenginePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareenginePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.deletionDelayHours">deletionDelayHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.hcx">hcx</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList">DataGoogleVmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList">DataGoogleVmwareenginePrivateCloudManagementClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList">DataGoogleVmwareenginePrivateCloudNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nsx">nsx</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList">DataGoogleVmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZero">sendDeletionDelayHoursIfZero</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList">DataGoogleVmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deletionDelayHours`<sup>Required</sup> <a name="deletionDelayHours" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.deletionDelayHours"></a>

```typescript
public readonly deletionDelayHours: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.hcx"></a>

```typescript
public readonly hcx: DataGoogleVmwareenginePrivateCloudHcxList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList">DataGoogleVmwareenginePrivateCloudHcxList</a>

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.managementCluster"></a>

```typescript
public readonly managementCluster: DataGoogleVmwareenginePrivateCloudManagementClusterList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList">DataGoogleVmwareenginePrivateCloudManagementClusterList</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataGoogleVmwareenginePrivateCloudNetworkConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList">DataGoogleVmwareenginePrivateCloudNetworkConfigList</a>

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nsx"></a>

```typescript
public readonly nsx: DataGoogleVmwareenginePrivateCloudNsxList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList">DataGoogleVmwareenginePrivateCloudNsxList</a>

---

##### `sendDeletionDelayHoursIfZero`<sup>Required</sup> <a name="sendDeletionDelayHoursIfZero" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZero"></a>

```typescript
public readonly sendDeletionDelayHoursIfZero: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.vcenter"></a>

```typescript
public readonly vcenter: DataGoogleVmwareenginePrivateCloudVcenterList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList">DataGoogleVmwareenginePrivateCloudVcenterList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareenginePrivateCloudConfig <a name="DataGoogleVmwareenginePrivateCloudConfig" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudConfig: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.location">location</a></code> | <code>string</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.name">name</a></code> | <code>string</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#location DataGoogleVmwareenginePrivateCloud#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#name DataGoogleVmwareenginePrivateCloud#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}.

---

### DataGoogleVmwareenginePrivateCloudHcx <a name="DataGoogleVmwareenginePrivateCloudHcx" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudHcx: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementCluster <a name="DataGoogleVmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementCluster: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs = { ... }
```


### DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig <a name="DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig = { ... }
```


### DataGoogleVmwareenginePrivateCloudNetworkConfig <a name="DataGoogleVmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudNetworkConfig: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig = { ... }
```


### DataGoogleVmwareenginePrivateCloudNsx <a name="DataGoogleVmwareenginePrivateCloudNsx" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudNsx: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx = { ... }
```


### DataGoogleVmwareenginePrivateCloudVcenter <a name="DataGoogleVmwareenginePrivateCloudVcenter" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

const dataGoogleVmwareenginePrivateCloudVcenter: dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareenginePrivateCloudHcxList <a name="DataGoogleVmwareenginePrivateCloudHcxList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudHcxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudHcxOutputReference <a name="DataGoogleVmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx">DataGoogleVmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudHcx;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx">DataGoogleVmwareenginePrivateCloudHcx</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">autoscalePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">consumedMemoryThresholds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">cpuThresholds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">scaleOutSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">storageThresholds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalePolicyId`<sup>Required</sup> <a name="autoscalePolicyId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```typescript
public readonly autoscalePolicyId: string;
```

- *Type:* string

---

##### `consumedMemoryThresholds`<sup>Required</sup> <a name="consumedMemoryThresholds" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```typescript
public readonly consumedMemoryThresholds: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a>

---

##### `cpuThresholds`<sup>Required</sup> <a name="cpuThresholds" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```typescript
public readonly cpuThresholds: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a>

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `scaleOutSize`<sup>Required</sup> <a name="scaleOutSize" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```typescript
public readonly scaleOutSize: number;
```

- *Type:* number

---

##### `storageThresholds`<sup>Required</sup> <a name="storageThresholds" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```typescript
public readonly storageThresholds: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">autoscalingPolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">maxClusterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">minClusterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingPolicies`<sup>Required</sup> <a name="autoscalingPolicies" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```typescript
public readonly autoscalingPolicies: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `coolDownPeriod`<sup>Required</sup> <a name="coolDownPeriod" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

---

##### `maxClusterNodeCount`<sup>Required</sup> <a name="maxClusterNodeCount" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```typescript
public readonly maxClusterNodeCount: number;
```

- *Type:* number

---

##### `minClusterNodeCount`<sup>Required</sup> <a name="minClusterNodeCount" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```typescript
public readonly minClusterNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">customCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCoreCount`<sup>Required</sup> <a name="customCoreCount" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```typescript
public readonly customCoreCount: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfig">stretchedClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster">DataGoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingSettings`<sup>Required</sup> <a name="autoscalingSettings" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.autoscalingSettings"></a>

```typescript
public readonly autoscalingSettings: DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `nodeTypeConfigs`<sup>Required</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```typescript
public readonly nodeTypeConfigs: DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `stretchedClusterConfig`<sup>Required</sup> <a name="stretchedClusterConfig" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfig"></a>

```typescript
public readonly stretchedClusterConfig: DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementCluster;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster">DataGoogleVmwareenginePrivateCloudManagementCluster</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocation">preferredLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocation">secondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredLocation`<sup>Required</sup> <a name="preferredLocation" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocation"></a>

```typescript
public readonly preferredLocation: string;
```

- *Type:* string

---

##### `secondaryLocation`<sup>Required</sup> <a name="secondaryLocation" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocation"></a>

```typescript
public readonly secondaryLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a>

---


### DataGoogleVmwareenginePrivateCloudNetworkConfigList <a name="DataGoogleVmwareenginePrivateCloudNetworkConfigList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference <a name="DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp">dnsServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">managementCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">managementIpAddressLayoutVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig">DataGoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsServerIp`<sup>Required</sup> <a name="dnsServerIp" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp"></a>

```typescript
public readonly dnsServerIp: string;
```

- *Type:* string

---

##### `managementCidr`<sup>Required</sup> <a name="managementCidr" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```typescript
public readonly managementCidr: string;
```

- *Type:* string

---

##### `managementIpAddressLayoutVersion`<sup>Required</sup> <a name="managementIpAddressLayoutVersion" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```typescript
public readonly managementIpAddressLayoutVersion: number;
```

- *Type:* number

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```typescript
public readonly vmwareEngineNetwork: string;
```

- *Type:* string

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```typescript
public readonly vmwareEngineNetworkCanonical: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig">DataGoogleVmwareenginePrivateCloudNetworkConfig</a>

---


### DataGoogleVmwareenginePrivateCloudNsxList <a name="DataGoogleVmwareenginePrivateCloudNsxList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudNsxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudNsxOutputReference <a name="DataGoogleVmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx">DataGoogleVmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudNsx;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx">DataGoogleVmwareenginePrivateCloudNsx</a>

---


### DataGoogleVmwareenginePrivateCloudVcenterList <a name="DataGoogleVmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareenginePrivateCloudVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudVcenterOutputReference <a name="DataGoogleVmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareenginePrivateCloud } from '@cdktf/provider-google'

new dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter">DataGoogleVmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareenginePrivateCloudVcenter;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter">DataGoogleVmwareenginePrivateCloudVcenter</a>

---



