# `google_dialogflow_cx_version`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_version`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version).

# `dialogflowCxVersion` Submodule <a name="`dialogflowCxVersion` Submodule" id="@cdktf/provider-google.dialogflowCxVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxVersion <a name="DialogflowCxVersion" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version google_dialogflow_cx_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

new dialogflowCxVersion.DialogflowCxVersion(scope: Construct, id: string, config: DialogflowCxVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig">DialogflowCxVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig">DialogflowCxVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isConstruct"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

dialogflowCxVersion.DialogflowCxVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isTerraformElement"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

dialogflowCxVersion.DialogflowCxVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isTerraformResource"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

dialogflowCxVersion.DialogflowCxVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.nluSettings">nluSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList">DialogflowCxVersionNluSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference">DialogflowCxVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nluSettings`<sup>Required</sup> <a name="nluSettings" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.nluSettings"></a>

```typescript
public readonly nluSettings: DialogflowCxVersionNluSettingsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList">DialogflowCxVersionNluSettingsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference">DialogflowCxVersionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxVersionConfig <a name="DialogflowCxVersionConfig" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

const dialogflowCxVersionConfig: dialogflowCxVersion.DialogflowCxVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the version. Limit of 64 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.description">description</a></code> | <code>string</code> | The description of the version. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#id DialogflowCxVersion#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.parent">parent</a></code> | <code>string</code> | The Flow to create an Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the version. Limit of 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#display_name DialogflowCxVersion#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the version. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#description DialogflowCxVersion#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#id DialogflowCxVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The Flow to create an Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#parent DialogflowCxVersion#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#timeouts DialogflowCxVersion#timeouts}

---

### DialogflowCxVersionNluSettings <a name="DialogflowCxVersionNluSettings" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettings.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

const dialogflowCxVersionNluSettings: dialogflowCxVersion.DialogflowCxVersionNluSettings = { ... }
```


### DialogflowCxVersionTimeouts <a name="DialogflowCxVersionTimeouts" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

const dialogflowCxVersionTimeouts: dialogflowCxVersion.DialogflowCxVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#create DialogflowCxVersion#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#delete DialogflowCxVersion#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#update DialogflowCxVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#create DialogflowCxVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#delete DialogflowCxVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dialogflow_cx_version#update DialogflowCxVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxVersionNluSettingsList <a name="DialogflowCxVersionNluSettingsList" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

new dialogflowCxVersion.DialogflowCxVersionNluSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.get"></a>

```typescript
public get(index: number): DialogflowCxVersionNluSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowCxVersionNluSettingsOutputReference <a name="DialogflowCxVersionNluSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

new dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.classificationThreshold">classificationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.modelTrainingMode">modelTrainingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettings">DialogflowCxVersionNluSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationThreshold`<sup>Required</sup> <a name="classificationThreshold" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.classificationThreshold"></a>

```typescript
public readonly classificationThreshold: number;
```

- *Type:* number

---

##### `modelTrainingMode`<sup>Required</sup> <a name="modelTrainingMode" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.modelTrainingMode"></a>

```typescript
public readonly modelTrainingMode: string;
```

- *Type:* string

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxVersionNluSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionNluSettings">DialogflowCxVersionNluSettings</a>

---


### DialogflowCxVersionTimeoutsOutputReference <a name="DialogflowCxVersionTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxVersion } from '@cdktf/provider-google'

new dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxVersion.DialogflowCxVersionTimeouts">DialogflowCxVersionTimeouts</a>

---



