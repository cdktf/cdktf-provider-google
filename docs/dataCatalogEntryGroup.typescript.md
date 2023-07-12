# `google_data_catalog_entry_group`

Refer to the Terraform Registory for docs: [`google_data_catalog_entry_group`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group).

# `dataCatalogEntryGroup` Submodule <a name="`dataCatalogEntryGroup` Submodule" id="@cdktf/provider-google.dataCatalogEntryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogEntryGroup <a name="DataCatalogEntryGroup" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group google_data_catalog_entry_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

new dataCatalogEntryGroup.DataCatalogEntryGroup(scope: Construct, id: string, config: DataCatalogEntryGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig">DataCatalogEntryGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig">DataCatalogEntryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataCatalogEntryGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isConstruct"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

dataCatalogEntryGroup.DataCatalogEntryGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformElement"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformResource"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference">DataCatalogEntryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.entryGroupIdInput">entryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.entryGroupId">entryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataCatalogEntryGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference">DataCatalogEntryGroupTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entryGroupIdInput`<sup>Optional</sup> <a name="entryGroupIdInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.entryGroupIdInput"></a>

```typescript
public readonly entryGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataCatalogEntryGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.entryGroupId"></a>

```typescript
public readonly entryGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogEntryGroupConfig <a name="DataCatalogEntryGroupConfig" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.Initializer"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

const dataCatalogEntryGroupConfig: dataCatalogEntryGroup.DataCatalogEntryGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.entryGroupId">entryGroupId</a></code> | <code>string</code> | The id of the entry group to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.description">description</a></code> | <code>string</code> | Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.displayName">displayName</a></code> | <code>string</code> | A short name to identify the entry group, for example, "analytics data - jan 2011". |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#id DataCatalogEntryGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#project DataCatalogEntryGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.region">region</a></code> | <code>string</code> | EntryGroup location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.entryGroupId"></a>

```typescript
public readonly entryGroupId: string;
```

- *Type:* string

The id of the entry group to create.

The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#entry_group_id DataCatalogEntryGroup#entry_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#description DataCatalogEntryGroup#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A short name to identify the entry group, for example, "analytics data - jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#display_name DataCatalogEntryGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#id DataCatalogEntryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#project DataCatalogEntryGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

EntryGroup location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#region DataCatalogEntryGroup#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataCatalogEntryGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#timeouts DataCatalogEntryGroup#timeouts}

---

### DataCatalogEntryGroupTimeouts <a name="DataCatalogEntryGroupTimeouts" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.Initializer"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

const dataCatalogEntryGroupTimeouts: dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#create DataCatalogEntryGroup#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#delete DataCatalogEntryGroup#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#update DataCatalogEntryGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#create DataCatalogEntryGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#delete DataCatalogEntryGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/data_catalog_entry_group#update DataCatalogEntryGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogEntryGroupTimeoutsOutputReference <a name="DataCatalogEntryGroupTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataCatalogEntryGroup } from '@cdktf/provider-google'

new dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCatalogEntryGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogEntryGroup.DataCatalogEntryGroupTimeouts">DataCatalogEntryGroupTimeouts</a>

---



