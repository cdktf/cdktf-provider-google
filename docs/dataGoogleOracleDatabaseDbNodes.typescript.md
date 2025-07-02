# `dataGoogleOracleDatabaseDbNodes` Submodule <a name="`dataGoogleOracleDatabaseDbNodes` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseDbNodes <a name="DataGoogleOracleDatabaseDbNodes" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes google_oracle_database_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes(scope: Construct, id: string, config: DataGoogleOracleDatabaseDbNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig">DataGoogleOracleDatabaseDbNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig">DataGoogleOracleDatabaseDbNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseDbNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseDbNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dbNodes">dbNodes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList">DataGoogleOracleDatabaseDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmClusterInput">cloudVmClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmCluster">cloudVmCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbNodes`<sup>Required</sup> <a name="dbNodes" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dbNodes"></a>

```typescript
public readonly dbNodes: DataGoogleOracleDatabaseDbNodesDbNodesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList">DataGoogleOracleDatabaseDbNodesDbNodesList</a>

---

##### `cloudVmClusterInput`<sup>Optional</sup> <a name="cloudVmClusterInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmClusterInput"></a>

```typescript
public readonly cloudVmClusterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `cloudVmCluster`<sup>Required</sup> <a name="cloudVmCluster" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmCluster"></a>

```typescript
public readonly cloudVmCluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseDbNodesConfig <a name="DataGoogleOracleDatabaseDbNodesConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseDbNodesConfig: dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.cloudVmCluster">cloudVmCluster</a></code> | <code>string</code> | vmcluster. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.location">location</a></code> | <code>string</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes#id DataGoogleOracleDatabaseDbNodes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudVmCluster`<sup>Required</sup> <a name="cloudVmCluster" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.cloudVmCluster"></a>

```typescript
public readonly cloudVmCluster: string;
```

- *Type:* string

vmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes#cloud_vm_cluster DataGoogleOracleDatabaseDbNodes#cloud_vm_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes#location DataGoogleOracleDatabaseDbNodes#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes#id DataGoogleOracleDatabaseDbNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/data-sources/oracle_database_db_nodes#project DataGoogleOracleDatabaseDbNodes#project}

---

### DataGoogleOracleDatabaseDbNodesDbNodes <a name="DataGoogleOracleDatabaseDbNodesDbNodes" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseDbNodesDbNodes: dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes = { ... }
```


### DataGoogleOracleDatabaseDbNodesDbNodesProperties <a name="DataGoogleOracleDatabaseDbNodesDbNodesProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseDbNodesDbNodesProperties: dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseDbNodesDbNodesList <a name="DataGoogleOracleDatabaseDbNodesDbNodesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseDbNodesDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseDbNodesDbNodesOutputReference <a name="DataGoogleOracleDatabaseDbNodesDbNodesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList">DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes">DataGoogleOracleDatabaseDbNodesDbNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.properties"></a>

```typescript
public readonly properties: DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList">DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseDbNodesDbNodes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes">DataGoogleOracleDatabaseDbNodesDbNodes</a>

---


### DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList <a name="DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference <a name="DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseDbNodes } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbServerOcid">dbServerOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.totalCpuCoreCount">totalCpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties">DataGoogleOracleDatabaseDbNodesDbNodesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerOcid`<sup>Required</sup> <a name="dbServerOcid" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbServerOcid"></a>

```typescript
public readonly dbServerOcid: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `totalCpuCoreCount`<sup>Required</sup> <a name="totalCpuCoreCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.totalCpuCoreCount"></a>

```typescript
public readonly totalCpuCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseDbNodesDbNodesProperties;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties">DataGoogleOracleDatabaseDbNodesDbNodesProperties</a>

---



