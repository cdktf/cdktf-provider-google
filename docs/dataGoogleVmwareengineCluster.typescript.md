# `dataGoogleVmwareengineCluster` Submodule <a name="`dataGoogleVmwareengineCluster` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineCluster <a name="DataGoogleVmwareengineCluster" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/vmwareengine_cluster google_vmwareengine_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster(scope: Construct, id: string, config: DataGoogleVmwareengineClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig">DataGoogleVmwareengineClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig">DataGoogleVmwareengineClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/vmwareengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList">DataGoogleVmwareengineClusterAutoscalingSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.management">management</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList">DataGoogleVmwareengineClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoscalingSettings`<sup>Required</sup> <a name="autoscalingSettings" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.autoscalingSettings"></a>

```typescript
public readonly autoscalingSettings: DataGoogleVmwareengineClusterAutoscalingSettingsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList">DataGoogleVmwareengineClusterAutoscalingSettingsList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.management"></a>

```typescript
public readonly management: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nodeTypeConfigs`<sup>Required</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nodeTypeConfigs"></a>

```typescript
public readonly nodeTypeConfigs: DataGoogleVmwareengineClusterNodeTypeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList">DataGoogleVmwareengineClusterNodeTypeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineClusterAutoscalingSettings <a name="DataGoogleVmwareengineClusterAutoscalingSettings" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterAutoscalingSettings: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings = { ... }
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies = { ... }
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds = { ... }
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds = { ... }
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds = { ... }
```


### DataGoogleVmwareengineClusterConfig <a name="DataGoogleVmwareengineClusterConfig" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterConfig: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.name">name</a></code> | <code>string</code> | The ID of the Cluster. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/vmwareengine_cluster#id DataGoogleVmwareengineCluster#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/vmwareengine_cluster#name DataGoogleVmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/vmwareengine_cluster#parent DataGoogleVmwareengineCluster#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/vmwareengine_cluster#id DataGoogleVmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineClusterNodeTypeConfigs <a name="DataGoogleVmwareengineClusterNodeTypeConfigs" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

const dataGoogleVmwareengineClusterNodeTypeConfigs: dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">autoscalePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">consumedMemoryThresholds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">cpuThresholds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">scaleOutSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">storageThresholds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalePolicyId`<sup>Required</sup> <a name="autoscalePolicyId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```typescript
public readonly autoscalePolicyId: string;
```

- *Type:* string

---

##### `consumedMemoryThresholds`<sup>Required</sup> <a name="consumedMemoryThresholds" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```typescript
public readonly consumedMemoryThresholds: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a>

---

##### `cpuThresholds`<sup>Required</sup> <a name="cpuThresholds" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```typescript
public readonly cpuThresholds: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a>

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `scaleOutSize`<sup>Required</sup> <a name="scaleOutSize" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```typescript
public readonly scaleOutSize: number;
```

- *Type:* number

---

##### `storageThresholds`<sup>Required</sup> <a name="storageThresholds" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```typescript
public readonly storageThresholds: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsList" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">autoscalingPolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">maxClusterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">minClusterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings">DataGoogleVmwareengineClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingPolicies`<sup>Required</sup> <a name="autoscalingPolicies" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```typescript
public readonly autoscalingPolicies: DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `coolDownPeriod`<sup>Required</sup> <a name="coolDownPeriod" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

---

##### `maxClusterNodeCount`<sup>Required</sup> <a name="maxClusterNodeCount" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```typescript
public readonly maxClusterNodeCount: number;
```

- *Type:* number

---

##### `minClusterNodeCount`<sup>Required</sup> <a name="minClusterNodeCount" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```typescript
public readonly minClusterNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineClusterAutoscalingSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings">DataGoogleVmwareengineClusterAutoscalingSettings</a>

---


### DataGoogleVmwareengineClusterNodeTypeConfigsList <a name="DataGoogleVmwareengineClusterNodeTypeConfigsList" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference <a name="DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineCluster } from '@cdktf/provider-google'

new dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount">customCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs">DataGoogleVmwareengineClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCoreCount`<sup>Required</sup> <a name="customCoreCount" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```typescript
public readonly customCoreCount: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineClusterNodeTypeConfigs;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs">DataGoogleVmwareengineClusterNodeTypeConfigs</a>

---



